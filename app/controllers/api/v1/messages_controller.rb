module Api::V1
  class MessagesController < ApiController
    def create
      # Don't trust the client to provide the sender email.
      params[:message][:sender_email] = current_user.email

      @message = Message.author(params[:message])
      @metadata = @message.find_metadata_by_user_email(current_user.email)
      if @message.save
        render 'messages/show'
      else
        render :json => @message.errors.full_messages, status: 422
      end
    end

    def show
      @message = Message.find(params[:id])
      @metadata = @message.find_metadata_by_user_email(current_user.email)

      if @metadata
        render 'messages/show'
      else
        render :json => {message: "Not sent to you!!"}, status: 402
      end
    end
  end
end
