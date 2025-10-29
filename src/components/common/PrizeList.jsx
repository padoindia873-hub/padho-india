import React from 'react'
import { Card, Collapse, List } from 'antd'
import 'antd/dist/reset.css'

// Import local images
import schoolImg1 from '../../assets/school1.jpg'
import schoolImg2 from '../../assets/school2.jpg'
import schoolImg3 from '../../assets/school3.jpg'
import schoolImg4 from '../../assets/school4.jpg'
import schoolImg5 from '../../assets/school5.jpg'
import schoolImg6 from '../../assets/school6.jpg'

import blockImg1 from '../../assets/block1.jpg'

import districtImg1 from '../../assets/district1.jpg'
import districtImg2 from '../../assets/district2.jpg'
import districtImg3 from '../../assets/district3.jpg'
import districtImg4 from '../../assets/district4.jpg'
import districtImg5 from '../../assets/district5.jpg'
import districtImg6 from '../../assets/district6.jpg'

import stateImg1 from '../../assets/state1.jpg'
import stateImg2 from '../../assets/state2.jpg'
import stateImg3 from '../../assets/state3.jpg'

import finalImg1 from '../../assets/final1.jpg'
import finalImg2 from '../../assets/final2.jpg'
import finalImg3 from '../../assets/final3.jpg'
import finalImg4 from '../../assets/final4.jpg'

const { Panel } = Collapse

const prizeData = [
  {
    level: 'School and College Level',
    winner: '1st Winner will get Rs. 10000',
     winnerone: '2nd to 11th Rannkers will get Rs. 5000',
    diamondCard: {
      title: 'Diamond Card Facilities (Top 11)',
      facilities: [
        'Free Online IT Training',
        'Free Legal Support in High Court',
        'Higher Study Chances',
        'Free Career Counselling classes',
        'Extra Personality Buildup Motivation Classes',
      ],
    },
    // images: [schoolImg1, schoolImg2, schoolImg3, schoolImg4, schoolImg5, schoolImg6],
      images: [schoolImg1],
  },
  {
    level: 'Block Level',
    prizes: [
      '1st Winner: Rs. 1,00,000/- Scholarship',
      'Consolation: 10th Top Winner Rs. 25,000/- Scholarship (Each)',
       'Consolation: 12th to 92th  Ranker  Rs. 10,000/- Scholarship (Each)',
    ],
    images: [blockImg1],
  },
  {
    level: 'District Level',
    prizes: [
      '**** 1st 46 Rankers will get ****',
      '50 Lakhs Cash',
       '3BHK Flat',
      '50gm Gold Medal',
      'Hyundai Exter Car',
      // '6th to 11th: Android Phone (Total 7)',
       '**** Remaining all Competitors will get ****',
       '70 Lakhs Cash ',
       '2BHK Flat ',
       '10gm Gold Medal ',
       'Hyundai Exter Car'

     
    ],
    images: [districtImg1, districtImg2, districtImg3, districtImg4, districtImg5, districtImg6],
  },
  // {
  //   level: 'State Level',
  //   prizes: [
  //     '24 members go to Final Level',
  //     '24 Hyundai Exter Cars',
  //     'Each gets Rs. 20 Lakh Cash',
  //     '50 gm Pure Gold Medal (22 carat)',
  //   ],
  //   images: [stateImg1, stateImg2, stateImg3],
  // },
  {
    level: 'Final Level (National Level)',
    rounds: [
      '1st Round: 500 Losers get 1 Crore cash (Higher Study)',
      '2nd Round: 40 Losers get 2 Crore + 3 BHK Flat',
      'Final Round: 9 Losers get 4 Crore + 4 BHK Flat + Mercedes Benz',
    ],
    winners: [
      {
        title: '1st Prize',
        rewards: [
          '1 Kg Gold Trophy',
          '10 Crore Cash',
          'Jaguar Car',
          '5 BHK Flat',
          'Foreign Tour (4 people, 10 days)',
        ],
      },
      {
        title: '2nd Prize',
        rewards: [
          '500 gm Gold Trophy',
          '8 Crore Cash',
          'Jaguar Car',
          '5 BHK Flat',
          'Foreign Tour (4 people, 10 days)',
        ],
      },
      {
        title: '3rd Prize',
        rewards: [
          '250 gm Gold Trophy',
          '6 Crore Cash',
          'Jaguar Car',
          '5 BHK Flat',
          'Foreign Tour (4 people, 10 days)',
        ],
      },
      {
        title: '4th to 92nd Rankers wiil get',
        rewards: [
          
          '3 Crore Cash',
          'Fortuner Car',
          
        ],
      },
      {
        title: '93rd to remaining all competitors wiil get',
        rewards: [
          
          '50 Lakhs Cash',
          'Maruti Brezza Car',
          
        ],
      },
    ],
    images: [finalImg1, finalImg2, finalImg3, finalImg4],
  },
]

const PrizeList = () => {
  return (
    <div className="p-5 md:p-8 bg-gray-50">
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-2 text-gray-800">
        Padho India National Cup
      </h2>
      <p className="text-center text-sm sm:text-base text-gray-600 mb-10 italic">
        <span className="font-semibold text-yellow-600">Unleash Your Potential</span>, Rise Through Every <span className="font-semibold text-yellow-600">Level</span>!
      </p>


      <Collapse accordion className='bg-gray-50 p-5'>
        {prizeData.map((section, index) => (
          <Panel
            header={<span className="font-bold text-lg text-gray-700">{section.level}</span>}
            key={index}
          >
            {section.winner && (
              <p className="text-base md:text-lg font-semibold text-yellow-700 mb-2">
                {section.winner}
              </p>
            )}

            {section.winnerone && (
              <p className="text-base md:text-lg font-semibold text-yellow-700 mb-2">
                {section.winnerone}
              </p>
            )}

            {section.images && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4">
                {section.images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`prize-img-${i}`}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                ))}
              </div>
            )}

            {section.diamondCard && (
              <Card
                title={<span className="font-bold text-gray-800 text-base md:text-lg">{section.diamondCard.title}</span>}
                className="my-4 bg-yellow-50 border border-gray-300"
                bordered={false}
              >
                <List
                  dataSource={section.diamondCard.facilities}
                  renderItem={(item) => (
                    <List.Item className="text-sm md:text-base font-medium">{item}</List.Item>
                  )}
                />
              </Card>
            )}

            {section.prizes && (
              <List
                dataSource={section.prizes}
                renderItem={(item) => (
                  <List.Item className="text-sm md:text-base font-medium text-gray-700">{item}</List.Item>
                )}
                bordered
                className="mb-4"
              />
            )}

            {section.rounds && (
              <>
                <h4 className="text-lg font-semibold mt-4 text-yellow-800">Losers Rounds</h4>
                <List
                  dataSource={section.rounds}
                  renderItem={(item) => (
                    <List.Item className="text-sm md:text-base font-medium">{item}</List.Item>
                  )}
                  bordered
                  className="mb-4"
                />
              </>
            )}

            {section.winners && (
              <>
                <h4 className="text-lg font-semibold mt-4 text-yellow-800">Top Winners</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                  {section.winners.map((winner, idx) => (
                    <Card
                      title={<span className="font-bold text-base md:text-lg">{winner.title}</span>}
                      key={idx}
                      className="bg-blue-50 border border-blue-600"
                      bordered={false}
                    >
                      <List
                        dataSource={winner.rewards}
                        renderItem={(item) => (
                          <List.Item className="text-sm md:text-base font-medium">{item}</List.Item>
                        )}
                      />
                    </Card>
                  ))}
                </div>
              </>
            )}
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default PrizeList
