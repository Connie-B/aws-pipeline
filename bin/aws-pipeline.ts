#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsPipelineStack } from '../lib/aws-pipeline-stack';

// environment specific variables
const envPrefix = 'dev';

const app = new cdk.App();
const pipelineStack = new AwsPipelineStack(app, `${envPrefix}-PipelineStack`);
