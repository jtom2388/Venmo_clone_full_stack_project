class Api::RequestsController < ApplicationController

    def create
        
        @request = Request.new(request_params)
        if @request.save
            @requestor = User.find_by(id: params[:request][:requestor_id])
            @requestee = User.find_by(id: params[:request][:requestee_id])
            @requestor.requestor_change(@request.amount)
            @requestee.requestee_change(@request.amount)
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
