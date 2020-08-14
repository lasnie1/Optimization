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
    obfunc.SetCoefficient(quantity,(-1)*credit*cost)
    obfunc.SetMaximization()
    agent.Solve()#*
    if (importance == "low"):
        return [obfunc.Value(), (obfunc.Value())/(expdemand)]
    elif (obfunc.Value() <= (expdemand - 10) and importance == "medium"):
        return [obfunc.Value() + 10, (obfunc.Value() + 10)/(expdemand)]
    elif (obfunc.Value() <= (expdemand - 20) and importance == "high"):
        return [obfunc.Value() + 20, (obfunc.Value() + 20)/(expdemand)]
    #* These lines are directly influenced by the instructions. The Value property is also based on this
    #link.

print(optimization(30, 20, "medium", 35, 60))
