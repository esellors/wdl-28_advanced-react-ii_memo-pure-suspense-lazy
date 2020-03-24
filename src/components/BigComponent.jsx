import React from 'react';

export default function BigComponent() {
  const arr = [];

  for (let i = 0; i < 10000; i++) {
    arr.push(<h1>{i}</h1>)
  }

  return arr;
}