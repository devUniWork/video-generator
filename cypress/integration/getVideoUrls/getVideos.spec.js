/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

import fs from "fs";

describe('Get Video', () => {
  beforeEach(() => {
  })

  it('get this ', () => {
    // const e = fs.readFileSync(`./curated-list/${feature}/1.txt`)
    // console.log(e.toString().split("\n"));

    cy.readFile(`./curated-list/${Cypress.env('fileUpto')}/1.txt`).then((fileUrl) => {
      const c = fileUrl.split('\n')
        // read in file list and write next file name as file i.e. 1, 2, 3... etc.
        c.forEach((item) => {
            if(item){
                console.log(item);
                cy.request({
                  url: item.split(',')[0],
                  method: 'GET'
                }).then((updatedUrl) => {
                   console.log('below')
                   console.log(updatedUrl.redirects.toString().split(' ')[1]);
                   console.log('above')
                   cy.writeFile(`./random-video-links/${Cypress.env('fileUpto')}/1.txt`, updatedUrl.redirects.toString().split(' ')[1] + ',' + item.split(',')[1] + '\n', { flag: 'a+', timeout: 120000 });
                })
            }
        })
    })
  })
    after(() => {
        // pass duration here.
        cy.exec(`ts-node generateTemplates.ts ${Cypress.env('duration')}`, { timeout: 120000 })
    })
})
