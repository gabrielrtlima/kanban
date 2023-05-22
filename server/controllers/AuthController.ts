import { Request, Response } from "express";
import { User as UserModel } from "../models/User";
import { Task as TaskModel} from "../models/Task";

const jwt = require('jsonwebtoken');

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI

var userProfile: any;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_REDIRECT_URI
  },

  //TODO: FIX TYPES
  function(accessToken: any, refreshToken: any, profile: any, done: any) {
    userProfile=profile;
    return done(null, userProfile);
  }
))

passport.serializeUser(function(user: any, cb: any) {
  cb(null, user);
});

passport.deserializeUser(function(obj: any, cb: any) {
  cb(null, obj);
});

export const AuthController = {
  googleAuth: passport.authenticate('google', { scope: ['profile', 'email'] }),

  googleAuthCallback: passport.authenticate('google', { failureRedirect: '/login' }),

  redirectAuthSuccess: (req: Request, res: Response) => { res.redirect('/api/v1/auth/success')},

  authSuccess: async (req: Request, res: Response) => { 
    if(!userProfile) {
      return res.status(404).json({ message: 'User not found' })
    }

    const userToRedirect = {
      name: userProfile.name.givenName,
      email: userProfile.emails[0].value,
      photo: userProfile.photos[0].value
    }

    const user = await UserModel.findOne({ email: userProfile.emails[0].value })

    if (!user) {
      return res.redirect(`${process.env.FRONTEND_URI}/register?userProfile=${JSON.stringify(userToRedirect)}`)
    } else return res.redirect(`/api/v1/auth/login`)
  },

  login: async (req: Request, res: Response) => {
    
    try {

      if(!userProfile) {
        return res.status(404).json({ message: 'User not found' })
      }
  
      const email = userProfile.emails[0].value
  
      const token = jwt.sign({ email }, process.env.TOKEN_KEY, { expiresIn: '1h' })
  
      // return res.status(200).json({ token, user: userProfile })
      return res.redirect(`${process.env.FRONTEND_URI}/kanban?token=${token}`)
  
      
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong', error})
    }


  },

  register: async (req: Request, res: Response) => {
    //TODO: pensar como bloq requisição sem vim do auth
    const { name, email, photo} = req.body

    try {
      const user = await UserModel.create({ name, email, photo })
      
      await TaskModel.create({id: `${user.name}-1`,content: 'Olá, bem vindo!', description: 'Esta aplicação foi desenvolvida por Gabriel, acesse o meu blog e saiba mais: http://grtl.dev', user: user.email })

      if(user) {
        const token = jwt.sign({ email }, process.env.TOKEN_KEY, { expiresIn: '1h' })
        return res.redirect(`${process.env.FRONTEND_URI}/kanban?token=${token}`)
      }
     
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong', error})
    }
  }
}

