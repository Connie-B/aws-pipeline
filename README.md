## AWS Pipeline

* Creates a Code Pipeline that runs when a GitHub repository is updated.

#### Pipeline is triggered when GitHub repository is updated: 
* Upload application source from GitHub to S3 bucket
* Build project according to buildspec.yml
* Deploy project according to appspec.yml
