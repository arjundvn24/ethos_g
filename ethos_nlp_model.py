# -*- coding: utf-8 -*-
"""Untitled15.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/143YtvnBbtWHPpsRN-HhUwo_34Pu37Sj0
"""

!pip install transformers
import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

import re
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.stem import WordNetLemmatizer
from transformers import pipeline

plt.style.use('ggplot')

import nltk
nltk.download('vader_lexicon')
from nltk.sentiment import SentimentIntensityAnalyzer
from tqdm.notebook import tqdm

sia = SentimentIntensityAnalyzer()

df = pd.read_json(r'temp.json')
df.to_csv(r'json_output.csv',index=None)
df = pd.read_csv('json_output.csv')
person = df['keyword'][0]
df = df[['title','text','date','author']]
df=df[df.date.notnull()]
df.reset_index(inplace=True)
df.reset_index(inplace=True)
df=df.drop(['index'],axis=1)
df=df.rename(columns={'level_0':'index'})

for i in range(df.shape[0]):
  var =df['date'][i]
  var=var[0:10]
  df['date'][i]=var

# Run the polarity score on the entire dataset
res = {}
for i, row in tqdm(df.iterrows(), total=len(df)):
    text = row['text']
    myid = row['index']
    res[myid] = sia.polarity_scores(text)

vaders = pd.DataFrame(res).T
vaders = vaders.reset_index()
vaders = vaders.merge(df, how='left')

label=[0]*vaders.shape[0]
sum=0
for i in range(vaders.shape[0]):
  sum+=vaders['compound'][i]
  if(vaders['compound'][i]>0):
    label[i]="Positive"
  else:
    label[i]="Negative"

vaders['label']=label

if(sum>0):
  print(f"{person} = net positive")
else:
  print(f"{person} = net negative")

df2 = vaders.copy()

lis_corp=[]
summary=[0]*df2.shape[0]
for j in range(df2.shape[0]):
  ps = PorterStemmer()
  text=df2['text'][j]
  lemmatizer = WordNetLemmatizer()
  sentences = nltk.sent_tokenize(text)
  key = nltk.word_tokenize(person)
  corpus = []
  key
  for i in range(len(sentences)):
      review = re.sub('[^a-zA-Z]', ' ', sentences[i])
      review = review.lower()
      review = review.split()
      # review = [lemmatizer.lemmatize(word) for word in review if word not in set(stopwords.words('english'))]
      review = ' '.join(review)
      for k in key:
        if(k in review):
          corpus.append(review)

  corpus=' '.join(corpus)
  lis_corp.append(corpus)
  corpus=corpus[len(corpus)-1024:len(corpus)-1]
  summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
  summary[j] = summarizer(corpus,max_length=30,min_length=10,do_sample=False)



df2["corpus"]=lis_corp

lis=[]
for i in summary:
  for j in i:
    lis.append(j.get('summary_text'))
df2["summary"]=lis

from transformers import pipeline

sent_pipeline = pipeline("sentiment-analysis")

bert_sc = []
for j in range(df2.shape[0]):
  text=df2['text'][j]
  lemmatizer = WordNetLemmatizer()
  sentences = nltk.sent_tokenize(text)
  key = nltk.word_tokenize(person)
  corpus = []
  key
  for i in range(len(sentences)):
      review = re.sub('[^a-zA-Z]', ' ', sentences[i])
      review = review.lower()
      review = review.split()
      # review = [lemmatizer.lemmatize(word) for word in review if word not in set(stopwords.words('english'))]
      review = ' '.join(review)
      for k in key:
        if(k in review):
          corpus.append(review)
  ans = []
  for i in corpus:
    ans = sent_pipeline(i)
  b=0.0
  for i in ans:
    b += i.get("score")
  bert_sc.append(b)


df2["bert_score"]=bert_sc

df2.to_json('file1.json', orient = 'records', compression = 'infer')


df2.sort_values(by='date',ascending =True,inplace=True)
dt_lis=df2.date.unique()
dt_out=[]
df_res = pd.DataFrame(columns = ['neg','pos','neu','final','bert_sc','date'])
df_res["date"]=dt_lis

n=0
for i in dt_lis:
  c=0
  nsums=0.0
  psums=0.0
  neusum=0.0
  tot=0.0
  bsum=0.0
  for j in range(df2.shape[0]):
    if(i==df2["date"][j]):
      c+=1
      nsums+=df2["neg"][j]
      psums+=df2["pos"][j]
      neusum+=df2["neu"][j]
      tot+=df2["compound"][j]
      bsum+=df2["bert_score"][j]
  
  df_res["neg"][n]=nsums/c
  df_res["pos"][n]=psums/c
  df_res["neu"][n]=neusum/c
  df_res["final"][n]=tot/c
  df_res["bert_sc"][n]=bsum/c
  n+=1

df_res.to_csv('file2.csv',index=False)

!pip install pystan~=2.14
!pip install fbprophet
!pip install pandas-datareader
!pip install --upgrade pandas-datareader
!pip install --upgrade pandas
!pip install --upgrade pandas-datareader
from sklearn.model_selection import train_test_split
import matplotlib.pyplot
import pandas as pd
from sklearn.metrics import mean_absolute_error
from fbprophet import Prophet
import pandas_datareader as pdr

df_res.rename(columns={'date': 'ds', 'final': 'y'}, inplace=True)
#del df_res['author']
import numpy as np
from sklearn.impute import SimpleImputer
mean_imputer = SimpleImputer(missing_values=np.nan,strategy="mean")
mean_imputer.fit_transform((df_res['y'].values).reshape(-1,1))

model = Prophet()
model.fit(df_res)
import math
future_dates=model.make_future_dataframe(periods=math.ceil(.2*df_res.shape[0]))

prediction = model.predict(future_dates)
model.plot(prediction)

from matplotlib import pyplot as plt

plt.savefig('predict.png')
