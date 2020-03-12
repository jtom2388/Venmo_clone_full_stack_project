class Api::TransactionsController < ApplicationController

    def create
        
        @transaction = Transaction.new(trans_params)
        if @transaction.save
            @payer = User.find_by(id: params[:transaction][:payer_id])
            
            @recipient = User.find_by(id: params[:transaction][:recipient_id])
            @payer.payer_change(@transaction.amount)
            @recipient.recipient_change(@transaction.amount)
            debugger
        end
        render '/api/transactions/show'
    end

    def index
        @transactions = Transaction.all
    end

    def show
        @transaction = Transaction.find(params[:id])
    end

    private
    def trans_params
        params.require(:transaction).permit(:amount, :body, :payer_id, :recipient_id)
    end
end
