FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /api

COPY requirements.txt /api/

RUN pip install -r requirements.txt

COPY . /api/