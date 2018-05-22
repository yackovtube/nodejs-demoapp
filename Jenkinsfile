pipeline {
  agent any
  stages {
    stage('npm install') {
      parallel {
        stage('npm install') {
          steps {
            pwd()
            sh 'ls'
          }
        }
        stage('2') {
          steps {
            sh 'echo hello'
          }
        }
      }
    }
    stage('error') {
      parallel {
        stage('error') {
          steps {
            sh 'ls'
            sh 'pwd'
          }
        }
        stage('test2') {
          steps {
            sh 'ls'
          }
        }
      }
    }
  }
  environment {
    MYVAR = '123'
  }
}
