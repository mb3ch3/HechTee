class GuestsController < ApplicationController
    def create 
        guest = Guest.create(permit_params)
        if guest.valid? 
            render json: guest, status: :created 
        else 
            render json: {errors: guest.errors}, status: :unprocessable_entity
        end
    end
    def index 
        guest = Guest.all
        render json: guest, status: :ok
    end 
    private 
    def permit_params
        params.permit(:gstname, :room, :employee_id, :admin_id)
    end  
end
