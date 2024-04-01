import { createPinia } from 'pinia'
import { ApiRepository } from '../global/repository/api_repository';
import { ApiRepositoryImpl } from '../global/repository/api_repository_impl';

export const pinia = createPinia();

/// Inject repository
export const apiRepository: ApiRepository = new ApiRepositoryImpl();
