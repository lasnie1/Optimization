import numpy as np
import re
import pandas as pd
import random
from fbprophet import Prophet

pframe = pd.read_csv("/Users/mikelasnier/INS_FINAL.csv")
qframe = pd.read_csv("/Users/mikelasnier/newHOJA.csv")
cframe = pd.read_csv("/Users/mikelasnier/costList.csv")

#See https://github.com/jacoblagus/kizunatech/blob/master/pharmacyOptimization.py 
#and https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html
#for read_csv method.

pCol = list(pframe.columns)
qCol = list(qframe.columns)
cCol = list(cframe.columns)
#See https://github.com/jacoblagus/kizunatech/blob/master/pharmacyOptimization.py
#for columns property.

pframe.shape #See https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shape.html?highlight=shape#pandas.DataFrame.shape
#for shape use.

codeList = list(pframe['CÓDIGO'])
artList = list(pframe['CÓDIGO PROVEEDOR'])
priceList = list(pframe['PRECIO FINAL'])
compList = list(qframe['COD_PRODUCTO'])
costList = list(cframe['Cost per Drug'])
#See https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html?highlight=column
#and https://pandas.pydata.org/docs/user_guide/10min.html#object-creation for column-accessing techniques.
print(len(codeList))
print(len(artList))
print(len(costList))

ind = qCol.index('COD_PRODUCTO')
qindex = qCol.index('PRECIO')
ind1 = qCol.index('ARTÍCULO')
cind = cCol.index('Cost per Drug')

qframe.shape

height = qframe.shape[0]
print(height)

#The below code currently raises an error.

##for i in range(height):
##    if (qframe.iat[i, ind] in codeList):
##        #find the corresponding price in pframe and put it in qframe
##        if (priceList[codeList.index(qframe.iat[i, ind])] != "#VALUE!"):
##            qframe.iat[i, qindex] = priceList[codeList.index(qframe.iat[i, ind])]
##        if (artList[codeList.index(qframe.iat[i, ind])] != "no disponible"):
##            qframe.iat[i, ind1] = artList[codeList.index(qframe.iat[i, ind])]
##            cframe.iat[i, cind] = costList[codeList.index(qframe.iat[i, ind])]
            
#See https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iat.html#pandas.DataFrame.iat
#for information on .iat

qframe.to_excel('/Users/mikelasnier/finalINS.xlsx') 
#See https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_excel.html
