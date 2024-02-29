import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjects() {
    const response = await api.get('api/projects')
    logger.log('📡 GOT PROJECTS', response.data)
    const newProjects = response.data.map(pojo => new Project(pojo))
    AppState.projects = newProjects
  }

  setActiveProject(project) {
    AppState.activeProject = project
  }
}

export const projectsService = new ProjectsService()