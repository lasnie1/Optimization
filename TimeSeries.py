import numpy as np
import re
import pandas as pd
import random
from fbprophet import Prophet
import matplotlib.pyplot as plt

df = pd.read_csv("/Users/mikelasnier/hoja-t_series.csv", encoding = "latin1") 
#See https://www.edureka.co/community/51644/python-unicodedecodeerror-codec-decode-position-invalid
# for Latin encoding in addition to https://github.com/jacoblagus/kizunatech/blob/master/pharmacyOptimization.py 
#and https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html
#for read_csv method.

print(df)

print(df.iat[0,4])
print(df.iat[1,4])
print(df.iat[2,4])
#See https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iat.html#pandas.DataFrame.iat
#for information on .iat

newframe = df
dimensions = newframe.shape
#See https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shape.html?highlight=shape#pandas.DataFrame.shape
#for shape use.
month = ""
day = "01"
for i in range(dimensions[0]):
    if (newframe.iat[i,4] == 'enero') or (newframe.iat[i,4] == 'ENERO') or (newframe.iat[i,4] == 'Enero'):
        month = "01"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'febrero') or (newframe.iat[i,4] == 'FEBRERO') or (newframe.iat[i,4] == 'Febrero'):
        month = "02"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
##...
    elif (newframe.iat[i,4] == 'marzo') or (newframe.iat[i,4] == 'MARZO') or (newframe.iat[i,4] == 'Marzo'):
        month = "03"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'abril') or (newframe.iat[i,4] == 'ABRIL') or (newframe.iat[i,4] == 'Abril'):
        month = "04"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'mayo') or (newframe.iat[i,4] == 'MAYO') or (newframe.iat[i,4] == 'Mayo'):
        month = "05"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'junio') or (newframe.iat[i,4] == 'JUNIO') or (newframe.iat[i,4] == 'Junio'):
        month = "06"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'julio') or (newframe.iat[i,4] == 'JULIO') or (newframe.iat[i,4] == 'Julio'):
        month = "07"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'agosto') or (newframe.iat[i,4] == 'AGOSTO') or (newframe.iat[i,4] == 'Agosto'):
        month = "08"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'septiembre') or (newframe.iat[i,4] == 'SEPTIEMBRE') or (newframe.iat[i,4] == 'Septiembre'):
        month = "09"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'octubre') or (newframe.iat[i,4] == 'OCTUBRE') or (newframe.iat[i,4] == 'Octubre'):
        month = "10"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'noviembre') or (newframe.iat[i,4] == 'NOVIEMBRE') or (newframe.iat[i,4] == 'Noviembre'):
        month = "11"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    elif (newframe.iat[i,4] == 'diciembre') or (newframe.iat[i,4] == 'DICIEMBRE') or (newframe.iat[i,4] == 'Diciembre'):
        month = "12"
        newframe.iat[i, 4] = str(newframe.iat[i, 5]) + "-" + month + "-" + day
    else: 
        newframe.iat[i, 4] = "2020-05-01"

print(df)

listA = []
for i in range(dimensions[0]):
    if df.iat[i,0] == "BETAHISTIDINA 16  MG (Z)": 
        listA.append(df[i:i+1])
#See Selection at https://pandas.pydata.org/docs/user_guide/10min.html#object-creation
#for information about slices with dataframes.
df1 = pd.concat(listA, axis = 0) 
#See https://pandas.pydata.org/docs/reference/api/pandas.concat.html#pandas.concat
#and https://pandas.pydata.org/docs/user_guide/merging.html for concat method use.
ind = list(range(len(listA)))

print(df1)

print(df1.columns) #See https://github.com/jacoblagus/kizunatech/blob/master/pharmacyOptimization.py
#for columns property.

df1 = df1[[df1.columns[0], df1.columns[1], df1.columns[4]]]
#See https://github.com/jacoblagus/kizunatech/blob/master/pharmacyOptimization.py
#for dataframe subsections by column.

print(df1)

print(len(df1))

df2 = df1

print(df2)

dfNew = pd.concat([df1,df2])

print(dfNew)

for i in range(len(df1)):
    dfNew.iat[i,0] = df1.iat[i,0]
    dfNew.iat[i,1] = df1.iat[i,1]
    dfNew.iat[i,2] = df1.iat[i,2]

for i in range(len(df1),len(dfNew)):  
    dfNew.iat[i,0] = df1.iat[(i%len(df1)),0]
    dfNew.iat[i,1] = 1.005 * float(df1.iat[(i%len(df1)),1])
    temp = df1.iat[(i%len(df1)),2]
    dfNew.iat[i,2] = "2020" + temp[4:]

print(dfNew)

dfNew = dfNew[[df1.columns[2],df1.columns[1]]]

dfNew = dfNew.rename(columns = {'MES':'ds','CANTIDAD_DESPACHADA':'y'}) 
#See https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.rename.html
#for renaming columns.

series = Prophet() 
#See https://facebook.github.io/prophet/docs/quick_start.html for the guiding source 
#of the time-series-related lines of code below (through initialization of 'prediction').

series.fit(dfNew)

print(dfNew)

full_data = series.make_future_dataframe(periods = 30)

prediction = series.predict(full_data)

prediction[['ds','yhat']].tail()

print(len(full_data))

print(len(prediction))

print(prediction.iat[len(prediction)-1,1])
