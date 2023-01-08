# -*- coding: utf-8 -*-
"""Untitled6 (1).ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1zljuUsW2BFjgydRJfXJWTrFG0vae1j0F
"""
import csv
import pandas as pd
import sys 
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import nltk
nltk.download('vader_lexicon')
from nltk.sentiment import SentimentIntensityAnalyzer
from tqdm.notebook import tqdm

df = pd.read_json('./temp.json')
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





plt.style.use('ggplot')


sia = SentimentIntensityAnalyzer()

# Run the polarity score on the entire dataset
res = {}
for i, row in tqdm(df.iterrows(), total=len(df)):
    text = row['text']
    myid = row['index']
    res[myid] = sia.polarity_scores(text)

vaders = pd.DataFrame(res).T

vaders = vaders.reset_index()
vaders = vaders.merge(df, how='left')


ax = sns.barplot(data=vaders, x='date', y='compound')
ax.set_title(f"Compund Score of {person}")
# plt.show()

fig, axs = plt.subplots(1, 3, figsize=(12, 3))
sns.barplot(data=vaders, x='date', y='pos', ax=axs[0])
sns.barplot(data=vaders, x='date', y='neu', ax=axs[1])
sns.barplot(data=vaders, x='date', y='neg', ax=axs[2])
axs[0].set_title('Positive')
axs[1].set_title('Neutral')
axs[2].set_title('Negative')
plt.tight_layout()
# plt.show()

label=[0]*vaders.shape[0]
sum=0
for i in range(vaders.shape[0]):
  sum+=vaders['compound'][i]
  if(vaders['compound'][i]>0):
    label[i]="Positive"
  else:
    label[i]="Negative"


vaders['label']=label
vaders.to_csv('output.csv')
vaders= vaders.loc[:,vaders.columns!="text"]
vaders.to_json('file1.json', orient = 'records', compression = 'infer')
