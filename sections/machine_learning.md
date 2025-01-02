# Machine Learning

- [Machine Learning](#machine-learning)
  - [Amazon Rekognition](#amazon-rekognition)
  - [Amazon Transcribe](#amazon-transcribe)
  - [Amazon Polly](#amazon-polly)
  - [Amazon Translate](#amazon-translate)
  - [Amazon Lex \& Connect](#amazon-lex--connect)
    - [Amazon Lex: (same technology that powers Alexa)](#amazon-lex-same-technology-that-powers-alexa)
    - [Amazon Connect](#amazon-connect)
  - [Amazon Comprehend](#amazon-comprehend)
  - [Amazon SageMaker](#amazon-sagemaker)
  - [Amazon Forecast](#amazon-forecast)
  - [Amazon Kendra](#amazon-kendra)
  - [Amazon Personalize](#amazon-personalize)
  - [Amazon Textract](#amazon-textract)
  - [Summary](#summary)

## Amazon Rekognition

- Identifies objects, people, text, and scenes in images and videos using ML
- Facial analysis and facial search for user verification and people counting
- Create a database of familiar faces or compare against celebrities
- Key uses:
  - Labeling
  - Content Moderation
  - Text Detection
  - Face Detection and Analysis (gender, age range, emotions)
  - Face Search and Verification
  - Celebrity Recognition
- More info: [Amazon Rekognition](https://aws.amazon.com/rekognition/)

## Amazon Transcribe

- Converts speech to text using Automatically speech recognition (ASR)
- Accurate and quick transcription
- Key uses:
  - Transcribing customer service calls
  - Automating closed captioning and subtitling
  - Generating metadata for media assets for searchable archives

## Amazon Polly

- Turns text into lifelike speech using deep learning
- Enables creation of talking applications

## Amazon Translate

- Provides natural and accurate language translation
- Localizes content for international users
- Efficiently translates large volumes of text

## Amazon Lex & Connect

### Amazon Lex: (same technology that powers Alexa)

- Uses ASR to convert speech to text
- Natural Language Understanding to recognize text and caller intent
- Helps build chatbots and call center bots

### Amazon Connect

- Cloud-based virtual contact center
- Receives calls and creates contact flows
- Integrates with CRM systems or AWS
- No upfront payments, 80% cheaper than traditional contact centers

## Amazon Comprehend

- Fully managed and serverless NLP service
- Uses machine learning to find insights and relationships in text
- Key features:
  - Identifies language of the text
  - Extracts key phrases, places, people, brands, or events
  - Determines sentiment of the text
  - Analyzes text using tokenization and parts of speech
  - Organizes text files by topic
- Key uses:
  - Analyzing customer interactions for positive or negative experiences
  - Grouping articles by topics

## Amazon SageMaker

- Fully managed service for developers / data scientists to build ML models
- Typically, difficult to do all the processes in one place + provision servers
- Machine learning process (simplified): predicting your exam score

## Amazon Forecast

- Fully managed service that uses ML to deliver highly accurate forecasts
- Example: predict the future sales of a raincoat
- 50% more accurate than looking at the data itself
- Reduces forecasting time from months to hours
- Key uses:
  - Product Demand Planning
  - Financial Planning
  - Resource Planning

## Amazon Kendra

- Fully managed document search service powered by ML
- Extracts answers from various document types (text, PDF, HTML, PowerPoint, MS Word, FAQs)
- Offers natural language search capabilities
- Learns from user interactions to promote preferred results
- Allows manual fine-tuning of search results

## Amazon Personalize

- Fully managed ML service for real-time personalized recommendations
- Key uses:
  - Personalized product recommendations
  - Customized direct marketing
- Integrates into websites, applications, SMS, email marketing systems
- Implemented in days, not months

## Amazon Textract

- Automatically extracts text, handwriting, and data from scanned documents using AI and ML
- Reads and processes various document types (PDFs, images)
- Key uses:
  - Financial Services (invoices, financial reports)
  - Healthcare (medical records, insurance claims)
  - Public Sector (tax forms, ID documents, passports)

## Summary

- **Rekognition**: Face detection, labeling, celebrity recognition
- **Transcribe**: Audio to text (e.g., subtitles)
- **Polly**: Text to audio
- **Translate**: Language translation
- **Lex**: Build conversational bots (chatbots)
- **Connect**: Cloud contact center
- **Comprehend**: Natural language processing
- **SageMaker**: Machine learning for developers and data scientists
- **Forecast**: Accurate forecasts
- **Kendra**: ML-powered search engine
- **Personalize**: Real-time personalized recommendations
- **Textract**: Detect text and data in documents
