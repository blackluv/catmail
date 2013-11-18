module Api::V1
  class InboxesController < ApiController
    def show
      render :json => current_user.inbox,
             include: [:message]
    end
  end
end
