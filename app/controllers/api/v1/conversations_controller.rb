module Api::V1
  class ConversationsController < ApiController
    def show
      @message = Message.find(params[:message_id])
      @conversation = current_user.conversation(@message.conversation_id)
      if @conversation
        render 'conversations/show'
      else
        render :json => {message: "You're not part of this conversation."}, status: 402
      end
    end
  end
end
