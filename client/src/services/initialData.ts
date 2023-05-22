export interface Data {
  tasks : {
    [key: string]: {
      id: string,
      content: string,
      data: string,
      description: string,
      user: [string]
    }
  },
  columns: {
    [key: string]: {
      id: string,
      title: string,
      taskIds: string[]
    }
  },
  columnOrder: number[]
}

export const fakeData: any = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage', data: '2020-01-01', description: 'descricao descricao descricao descricao', autor: 'Gabriel' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show', data: '2020-01-01', description: 'descricao descricao descricao descricao', autor: 'Gabriel' },
    'task-3': { id: 'task-3', content: 'Charge my phone', data: '2020-01-01', description: 'descricao descricao descricao descricao',  autor: 'Gabriel' },
    'task-4': { id: 'task-4', content: 'Cook dinner', data: '2020-01-01', description: 'descricao descricao descricao descricao', autor: 'Gabriel' },
    'task-5': { id: 'task-5', content: 'Cook dinner', data: '2020-01-01', description: 'descricao descricao descricao descricao', autor: 'Gabriel' },
    'task-6': { id: 'task-6', content: 'Cook dinner', data: '2020-01-01', description: 'descricao descricao descricao descricao', autor: 'Gabriel' },
    'task-7': { id: 'task-7', content: 'Cook dinner', data: '2020-01-01', description: '', autor: 'Gabriel' },
    'task-8': { id: 'task-8', content: 'Cook dinner', data: '2020-01-01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis', autor: 'Gabriel' },
    'task-9': { id: 'task-9', content: 'Cook dinner', data: '2020-01-01', description: 'Lorem Ip', autor: 'Gabriel' },
    'task-10': { id: 'task-10', content: 'Cook dinner', data: '2020-01-01', description: 'descricao descricao descricao descricao', autor: 'Gabriel' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10']
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3']
}

export const initialData = async (email: string, token: string) : Promise<Data> => {
  const data : Data = {
    tasks: {},
    columns: {},
    columnOrder: [1, 2, 3]
  }
  const taskResponse = await fetch(`${import.meta.env.VITE_API_URL}/task/user?email=${email}`, {
    headers: { Authorization: `${token}`}
  })
  const taskData = await taskResponse.json()
  taskData.result.forEach((task: any) => {
    data.tasks[task.id] = {
      id: task.id,
      content: task.content,
      data: task.createdAt,
      description: task.description,
      user: task.user
    }
  })

  const columnResponse = await fetch(`${import.meta.env.VITE_API_URL}/column`, {
    headers: { Authorization: `${token}`}
  })
  const columnData = await columnResponse.json()
  columnData.result.forEach((column: any) => {
    data.columns[column.id] = {
      id: column.id,
      title: column.title,
      taskIds: column.taskIds.filter((task: any) => data.tasks[task])
    }
  })

    
  return data
} 

