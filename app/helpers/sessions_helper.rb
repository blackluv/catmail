module SessionsHelper
  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logout(user)
    session[:session_token] = nil
    user.session_token = nil
    user.save!
  end
end
