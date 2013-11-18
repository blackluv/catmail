GMail::Application.routes.draw do
  root to: 'roots#show'

  scope '/auth' do
    get '/:provider/callback' => 'sessions#create'
    get '/failure'            => 'sessions#fail'
  end

  get '/login' => 'sessions#new', as: :login
  delete '/logout' => 'sessions#destroy', as: :logout

  namespace 'api' do
    namespace 'v1' do
      resource :inbox, only: [:show]
      resources :messages, only: [:show, :create]
    end
  end
end
