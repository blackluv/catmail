module Api::V1
  class InboxesController < ApiController
    def show
      @inbox = current_user.inbox
      render 'messages/inbox'
    end
  end
end
