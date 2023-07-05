pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from the main repository(project repo)
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/Barney7777/CrankBit-FrontEnd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install' // 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test' // Run tests
            }
        }
        stage('Build') {
            steps {
                dir('./') {
                  echo 'build'
                  // Build your application according to the package.jason file
                  sh 'npm run build'
                }
            }
        }
        stage('Upload to S3') {
            steps {
                // Use AWS CLI to upload files to S3
                withAWS(region: 'ap-southeast-2', credentials: 'aws-s3') {
                sh 'aws s3 sync build/ s3://crankbit-barneywang.click-dev/'
                }
            }
        }
    }
}
