export interface Task {
  id: number
  name: string
  description: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  completed: boolean
}
