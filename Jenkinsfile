pipeline {
    agent any
 options {
        ansiColor('xterm')
    }
    stages {
        stage('Clonar repositório') {
            steps {
                git 'https://github.com/Gabriel-Castilho/TCC-EBAC.git'
            }
            
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
            
        }
        stage('Executar testes') {
            steps {
                bat 'npm run cy:run'
            }
            
        }
    }
}