pipeline {
    agent any
    tools {
        // Specify the Node.js tool installation
        nodejs 'nodejs'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control (e.g., Git)
                git branch: 'main', url: 'https://github.com/Barney7777/CrankBit-FrontEnd.git'
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
                  sh 'yarn build --config .eslintrc'
                }
            }
        }
        // stage('Upload to S3') {
        //     steps {
        //         // Use AWS CLI to upload files to S3
        //         withAWS(region: 'ap-southeast-2', credentials: 'aws-s3') {
        //         sh 'aws s3 sync build/ s3://crankbit-test/'
        //         }
        //     }
        // }
    }
}