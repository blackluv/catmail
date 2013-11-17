module Api::V1
  class InboxesController < ApiController
    def show
      @inbox = current_user.inbox
      render :json
    end
  end
end
