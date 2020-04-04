class Api::RequestsController < ApplicationController

    def create
        
        @request = Request.new(request_params)
        @requestor = User.find_by(id: params[:request][:requestor_id])
        @requestee = User.find_by(id: params[:request][:requestee_id])
        if @requestee.balance > @request.amount && @requestor != @requestee
            if @request.save

            end
        end
        render '/api/transactions/show'
    end

    def index
        @requests = Request.all
    end

    def show
        @request = Request.find(params[:id])
    end

    private
    def request_params
        params.require(:request).permit(:amount, :body, :payer_id, :recipient_id)
    end
end
