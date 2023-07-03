pipeline {
    agent any
    tools {
        terraform 'terraform'
        nodejs 'nodejs'
    }
    parameters {
        string(name: 'WORKSPACE', defaultValue: 'development', description:'setting up workspace for terraform')
    }
    environment {
        TF_HOME = tool('terraform')
        TF_LOG = "WARN"
        TF_IN_AUTOMATION = "true"
        PATH = "$TF_HOME:$PATH"

    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from the main repository(project repo)
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/Barney7777/CrankBit-FrontEnd.git'
            }
        }
        
        stage('TerraformInit'){
            steps {
                withAWS(region: 'ap-southeast-2', credentials: 'aws-s3'){
                    dir('./Terraform/provision-files') {
                        sh "terraform init -input=false"
                        sh "echo \$PWD"
                        sh "whoami"
                    }
                }
            }
        }

        stage('TerraformFormat'){
            steps {
                dir('./Terraform/provision-files'){
                    sh "terraform fmt -list=true -write=false -diff=true -check=true"
                }
            }
        }

        stage('TerraformValidate'){
            steps {
                dir('./Terraform/provision-files'){
                    sh "terraform validate"
                }
            }
        }

        stage('TerraformPlan'){
            steps {
                withAWS(region: 'ap-southeast-2', credentials: 'aws-s3') {
                    dir('./Terraform/provision-files') {
                        script {
                            try {
                                sh "terraform workspace new ${params.WORKSPACE}"
                            } catch (err) {
                                sh "terraform workspace select ${params.WORKSPACE}"
                            }
                            sh "terraform plan \
                            -out terraform.tfplan;echo \$? > status"
                            stash name: "terraform-plan", includes: "terraform.tfplan"
                        }
                    }
                }
            }
        }
        stage('TerraformApply'){
            steps {
                script{
                    def apply = false
                    try {
                        input message: 'Can you please confirm the apply', ok: 'Ready to Apply the Config'
                        apply = true
                    } catch (err) {
                        apply = false
                         currentBuild.result = 'UNSTABLE'
                    }
                    if(apply){
                        withAWS(region: 'ap-southeast-2', credentials: 'aws-s3') {
                            dir('./Terraform/provision-files') {
                                unstash "terraform-plan"
                                sh 'terraform apply terraform.tfplan'
                            }
                        }
                    }
                }
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
        stage('TerraformDestroy') {
            steps {
                script {
                    def destroy = false
                    try {
                        input message: 'Are you sure you want to destroy the infrastructure?', ok: 'Destroy'
                        destroy = true
                    } catch (err) {
                        destroy = false
                        currentBuild.result = 'UNSTABLE'
                    }
                    if (destroy) {
                        withAWS(region: 'ap-southeast-2', credentials: 'aws-s3') {
                            dir('./Terraform/provision-files') {
                                sh 'terraform destroy -auto-approve'
                            }
                        }
                    }
                }
            }
        }
    }
}
