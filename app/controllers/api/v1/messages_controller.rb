module Api::V1
  class MessagesController < ApiController
    def create
      params[:message][:sender_email] = current_user.email

      @message = Message.author(params[:message])
      if @message.save
        render 'messages/show'
      else
        render :json => @message.errors.full_messages, status: 422
      end
    end

    def show

    end
  end
end
