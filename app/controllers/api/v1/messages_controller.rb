module Api::V1
  class MessagesController < ApiController
    def create
      params[:message][:sender_email] = current_user.email

      @message = Message.author(params[:message])
      @metadata = @message.metadata.where(:user_email => current_user.email) #TODO more elegant way of doing this.
      if @message.save
        render 'messages/show'
      else
        render :json => @message.errors.full_messages, status: 422
      end
    end

    def show
      @message = Message.find(params[:id])
      @metadata = @message.metadata.where(:user_email => current_user.email) #TODO more elegant way of doing this.
      if @metadata
        render 'messages/show'
      else
        render :json => {message: "Not sent to you!!"}, status: 402

    end
  end
end
