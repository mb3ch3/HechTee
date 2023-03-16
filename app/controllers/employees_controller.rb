class EmployeesController < ApplicationController
    def create 
        employee = Employee.create(permit_params)
        if employee.valid?
            render json: employee, status: :created 
        else 
            render json: {errors: employee.errors}, status: :unprocessable_entity
        end
    end

    def index 
        employee = Employee.all
        render json: employee, status: :ok
    end 

    private 
    def permit_params
        params.permit(:empname, :phone, :jobdes, :admin_id)
    end 
end
