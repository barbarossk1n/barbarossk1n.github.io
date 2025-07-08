---
layout: post
title: "Building a Robust Options Pricing Model in Python"
date: 2023-01-15
tags: [options, derivatives, python, quantlib]
excerpt: "A deep dive into implementing and calibrating options pricing models with Python and QuantLib."
---

Options pricing is a fundamental concept in quantitative finance. In this post, I'll walk through implementing a robust options pricing model using Python and QuantLib.

## The Black-Scholes Model

The Black-Scholes formula for European options is given by:

$$
C(S, t) = S_t N(d_1) - Ke^{-r(T-t)} N(d_2)
$$

Where:

$$
d_1 = \frac{\ln(S_t/K) + (r + \sigma^2/2)(T-t)}{\sigma\sqrt{T-t}}
$$

$$
d_2 = d_1 - \sigma\sqrt{T-t}
$$

Let's implement this in Python:

```python
import numpy as np
from scipy.stats import norm

def black_scholes(S, K, T, r, sigma, option_type='call'):
    """
    Calculate Black-Scholes option price for a European option.
    
    Parameters:
    S : float
        Current stock price
    K : float
        Strike price
    T : float
        Time to maturity in years
    r : float
        Risk-free interest rate (annual)
    sigma : float
        Volatility of the underlying asset
    option_type : str
        'call' or 'put'
    
    Returns:
    float : Option price
    """
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    
    if option_type == 'call':
        price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    else:
        price = K * np.exp(-r * T) * norm.cdf(-d2) - S * norm.cdf(-d1)
        
    return price
