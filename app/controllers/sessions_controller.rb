class SessionsController < ApplicationController

    def create 
        admin = Admin.find_by(username: permit_params[:username])
        if admin
            render json: {errors: "ako ndani"}
        else 
            admin = Admin.create(permit_params)
            if admin.valid?
                render json: admin, status: :created 
            else 
                render json: {errors: admin.errors}, status: :unprocessable_entity
            end 
        end
    end 
    
    def show 
        admin = Admin.all
        render json: admin, status: :ok
    end 

    def login
        admin = Admin.find_by(username: permit_params[:username])
        if admin && admin.authenticate(permit_params[:password])
            render json: admin
        else
            render json: {error: "wrong username/password"}
        end

    end

    def validpwd(check,pwd)
        if check == pwd
            render json: true
        else
            render json: false
        end
    end

    private 
    def permit_params
        params.permit(:username, :email, :password)
    end 
end
