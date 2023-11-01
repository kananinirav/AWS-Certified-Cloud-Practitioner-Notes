# Other AWS Services

- [Other AWS Services](#other-aws-services)
  - [Amazon WorkSpaces](#amazon-workspaces)
  - [Amazon AppStream 2.0](#amazon-appstream-20)
  - [Amazon Sumerian](#amazon-sumerian)
  - [AWS IoT Core](#aws-iot-core)
  - [Amazon Elastic Transcoder](#amazon-elastic-transcoder)
  - [AWS AppSync](#aws-appsync)
  - [AWS Amplify](#aws-amplify)
  - [AWS Device Farm](#aws-device-farm)
  - [AWS Backup](#aws-backup)
  - [AWS Elastic Disaster Recovery (DRS)](#aws-elastic-disaster-recovery-drs)
  - [AWS DataSync](#aws-datasync)
  - [AWS Application Discovery Service](#aws-application-discovery-service)
  - [AWS Application Migration Service (MGN)](#aws-application-migration-service-mgn)
  - [AWS Migration Evaluator](#aws-migration-evaluator)
  - [AWS Migration Hub](#aws-migration-hub)
  - [AWS Fault Injection Simulator (FIS)](#aws-fault-injection-simulator-fis)
  - [AWS Step Functions](#aws-step-functions)
  - [AWS Ground Station](#aws-ground-station)
  - [AWS Pinpoint](#aws-pinpoint)

## Amazon WorkSpaces

- Managed Desktop as a Service (DaaS) solution to easily provision Windows or Linux desktops
- Great to eliminate management of on-premise VDI (Virtual Desktop Infrastructure)
- Fast and quickly scalable to thousands of users
- Secured data – integrates with KMS
- Pay-as-you-go service with monthly or hourly rates

## Amazon AppStream 2.0

- Desktop Application Streaming Service
- Deliver to any computer, without acquiring, provisioning infrastructure
- The application is delivered from within a web browser

| Amazon AppStream 2.0                                                       | WorkSpaces                                                       |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Stream a desktop application to web browsers (no need to connect to a VDI) | Fully managed VDI and desktop available                          |
| Works with any device (that has a web browser)                             | The users connect to the VDI and open native or WAM applications |
| Allow to configure an instance type per application type (CPU, RAM, GPU)   | Workspaces are on-demand or always on                            |

## Amazon Sumerian

- Create and run virtual reality (VR), augmented reality (AR), and 3D applications
- Can be used to quickly create 3D models with animations
- Ready-to-use templates and assets - no programming or 3D expertise required
- Accessible via a web-browser URLs or on popular hardware for AR/VR
- Example: <https://docs.aws.amazon.com/sumerian/latest/userguide/gettingstartedshowcase.html>

## AWS IoT Core

- IoT stands for “Internet of Things” – the network of internet-connected devices that are able to collect and transfer data
- AWS IoT Core allows you to easily connect IoT devices to the AWS Cloud • Serverless, secure & scalable to billions of devices and trillions of messages
- Your applications can communicate with your devices even when they aren’t connected
- Integrates with a lot of AWS services (Lambda, S3, SageMaker, etc.)
- Build IoT applications that gather, process, analyze, and act on data

## Amazon Elastic Transcoder

- Elastic Transcoder is used to **convert media files stored in S3 into media files in the formats required by consumer playback devices (phones etc..)**
- Benefits:
  - Easy to use
  - Highly scalable – can handle large volumes of media files and large file sizes
  - Cost effective – duration-based pricing model
  - Fully managed & secure, pay for what you use

## AWS AppSync

- Store and sync data across mobile and web apps in real-time
- Makes use of GraphOL (mobile technology from Facebook)
- Client Code can be generated automatically
- Integrations with DynamoDB / Lambda
- Real-time subscriptions
- Offline data synchronization (replaces Cognito Sync)
- Fine Grained Security
- AWS Amplify can leverage AWS AppSync in the background!

## AWS Amplify

- A set of tools and services that helps you develop and deploy scalable full stack web and mobile applications

- It offers following features:
  - Backend-as-a-Service (BaaS)
  - Frontend Libraries and UI Components
  - Authentication
  - Storage
  - API Management (REST, GraphQL)
  - Real-Time and Offline Capabilities through AWS AppSync
  - CI/CD
  - Command-Line Interface (CLI)
  - PubSub
  - Analytics
  - AI/ML Predictions
  - Monitoring
  - Source Code from AWS, GitHub, etc.

## AWS Device Farm

- Fully-managed service that tests your web and mobile apps against desktop browsers, real mobile devices, and tablets
- Run tests concurrently on multiple devices (speed up execution)
- Ability to configure device settings (GPS, language, Wi-Fi, Bluetooth, etc.)

## AWS Backup

- Fully-managed service to centrally manage and automate backups across AWS services
- On-demand and scheduled backups
- Supports PITR (Point-in-time Recovery)
- Retention Periods, Lifecycle Management, Backup Policies,etc.
- Cross-Region Backup
- Cross-Account Backup (using AWS Organizations)

## AWS Elastic Disaster Recovery (DRS)

- Used to be named “CloudEndure Disaster Recovery”
- Quickly and easily **recover** your physical, virtual, and cloud-based servers into AWS
- Example: protect your most critical databases (including Oracle, MySQL, and SQL Server), enterprise apps (SAP), protect your data from ransomware attacks, …
- Continuous block-level replication for your servers

## AWS DataSync

- Move large amount of data from on-premises to AWS
- Can synchronize to: Amazon S3 (any storage classes – including Glacier), Amazon EFS, Amazon FSx for Windows
- Replication tasks can be scheduled hourly, daily, weekly
- The replication tasks are incremental after the first full load

## AWS Application Discovery Service

- Plan migration projects by gathering information about on-premises data centers
- Server utilization data and dependency mapping are important for migrations
- Agentless Discovery (AWS Agentless Discovery Connector)
  - VM inventory, configuration, and performance history such as CPU, memory, and disk usage
- Agent-based Discovery (AWS Application Discovery Agent)
  - System configuration, system performance, running processes, and details of the network connections between systems
- Resulting data can be viewed within AWS Migration Hub

## AWS Application Migration Service (MGN)

- *The “AWS evolution” of CloudEndure Migration, replacing AWS Server Migration Service (SMS)*
- Lift-and-shift (rehost) solution which simplify migrating applications to AWS
- Converts your physical, virtual, and cloud-based servers to run natively on AWS
- Supports wide range of platforms, Operating Systems, and databases
- Minimal downtime, reduced costs

## AWS Migration Evaluator

- Helps you build a data-driven business case for migration to AWS
- Provides a clear baseline of what your organization is running today
- Install Agentless Collector to conduct broad-based discovery
- Take a snapshot of on-premises foot-print, server dependencies,...
- Analyze current state, define target state, then develop migration plan

## AWS Migration Hub

- Central location to collect servers and applications inventory data for the
assessment, planning, and tracking of migrations to AWS
- Helps accelerate your migration to AWS, automate lift-and-shift
- **AWS Migration Hub Orchestrator** - provides pre-built templates to save time and
effort migrating enterprise apps (e.g., SAP Microsoft SQL Server...)
- Supports migrations status updates from Application Migration Service (MGN)
and Database Migration Service (DMS)

## AWS Fault Injection Simulator (FIS)

- A fully managed service for running fault injection experiments on AWS workloads
- Based on **Chaos Engineering** – stressing an application by creating disruptive events (e.g., sudden increase in CPU or memory), observing how the system responds, and implementing improvements
- Helps you uncover hidden bugs and performance bottlenecks
- Supports the following AWS services: EC2, ECS, EKS, RDS…
- Use pre-built templates that generate the desired disruptions

## AWS Step Functions

- Build serverless visual workflow to orchestrate your Lambda functions
- Features: sequence, parallel, conditions, timeouts, error handling, etc.
- Can integrate with EC2, ECS, On-premises servers, API Gateway, SQS queues, etc.
- Possibility of implementing human approval feature
- Use cases: order fulfillment, data processing, web applications, any workflow

<img src="../images/step_functions.png" height="300" width="300">

## AWS Ground Station

- Fully managed service that lets you control satellite communications, process data, and scale your satellite operations
- Provides a global network of satellite ground stations near AWS regions
- Allows you to download satellite data to your AWS VPC within seconds
- Send satellite data to S3 or EC2 instance
- Use cases: weather forecasting, surface imaging, communications, video broadcasts

## AWS Pinpoint

- Scalable 2-way (outbound/inbound) marketing communications service
- Supports email, SMS, push, voice, and in-app messaging
- Ability to segment and personalize messages with the right content to customers
- Possibility to receive replies
- Scales to billions of messages per day
- Use cases: run campaigns by sending marketing, bulk, transactional SMS messages
- Versus **Amazon SNS or Amazon SES**
  - In SNS & SES, you managed each message's audience, content, and delivery schedule
  - In Amazon Pinpoint, you create message templates, delivery schedules, highly-targeted segments, and full campaigns

* * *

[<img align="center" src="../images/back-arrow.png" height="20" width="20"/> Advanced Identity](./advanced_identity.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[<img align="center" src="../images/list.png" height="30" width="30"/> List](../README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[AWS Architecting & Ecosystem <img align="center" src="../images/forward-arrow.png" height="20" width="20"/>](./architecting_and_ecosystem.md)
