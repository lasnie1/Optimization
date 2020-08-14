import numpy as np
import pandas as pd
from ortools.linear_solver import pywraplp
agent = pywraplp.Solver.CreateSolver('simple_lp_program', 'GLOP')
#See https://developers.google.com/optimization/introduction/python for the module and instructions for 
#optimization.

def optimization(price, cost, importance, expdemand, credit):
quantity = agent.NumVar(0,expdemand,'quantity') #*
obfunc = agent.Objective()
obfunc.SetCoefficient(quantity,price)
b = -1
if credit >= 30:
    b = -(30/credit)
obfunc.SetCoefficient(quantity,(b)*credit*cost)
obfunc.SetMaximization()
agent.Solve()#*
if (importance == "Low"):
    return [obfunc.Value(), (obfunc.Value())/(expdemand)]
elif (obfunc.Value() <= (expdemand - 10) and importance == "Medium"):
    return [obfunc.Value() + 10, (obfunc.Value() + 10)/(expdemand)]
elif (obfunc.Value() <= (expdemand - 20) and importance == "High"):
    return [obfunc.Value() + 20, (obfunc.Value() + 20)/(expdemand)]
#* These lines are directly influenced by the instructions. The Value property is also based on this
#link.

print(optimization(30, 20, "Medium", 35, 60))
