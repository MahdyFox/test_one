# # get a copy from a base image 
# FROM python:3.9

# # make a folder in continer to move all files in it
# WORKDIR /MyApp

# # copy all debendances in continer
# COPY requirements.txt .

# # install all dependances
# RUN python -m pip install --upgrade pip
# RUN python -m pip install -r requirements.txt


# # RUN python pip install

# #copy all file to contenier
# COPY . . 
# # make a port from contenier
# EXPOSE 4020
# # run app from a contenier
# CMD [ "python","manage.py","runserver" ]


FROM python:3.10

WORKDIR /MyApp

COPY requirements.txt .

RUN python -m pip install --upgrade pip

RUN python -m pip install -r requirements.txt --verbose

COPY . .

EXPOSE 4020

CMD ["python", "manage.py", "runserver", "0.0.0.0:4020"]

