{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 window.onload = function() \{\
  // Get URL parameters\
  const urlParams = new URLSearchParams(window.location.search);\
  const name = urlParams.get('name');\
  const id = urlParams.get('id');\
  const location = urlParams.get('location');\
\
  // Display customer info\
  document.getElementById('nameText').textContent = `Hello, $\{name\} ($\{id\})`;\
  document.getElementById('locationText').textContent = `Your location is: $\{location\}`;\
\
  // Handle form submission\
  document.getElementById('orderForm').addEventListener('submit', function(event) \{\
    event.preventDefault();\
    const cups = document.getElementById('cups').value;\
    const lids = document.getElementById('lids').value;\
    const tea = document.getElementById('tea').value;\
\
    alert(`Order Confirmed! \\nName: $\{name\} \\nLocation: $\{location\} \\nPaper Cups: $\{cups\} pcs \\nPlastic Lids: $\{lids\} pcs \\nTea Powder: $\{tea\} grams`);\
  \});\
\};\
}