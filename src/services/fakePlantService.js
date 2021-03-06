function getPlant() {
  const plantList = [
    {
      _id: '5b21ca3eeb7f6fbccd471815',
      projectPin: '561779',
      siteCode: 'QK17C',
      plantCode: 'F6055',
      name: '8 Tonne Excavator',
      internalRate: '104.00',
      marketRate: '120.00',
    },
    {
      _id: '5b21ca3eeb7f6fbcddd471815',
      projectPin: '561779',
      siteCode: 'QK17C',
      plantCode: 'F6044',
      name: '2.7 Tonne Excavator',
      internalRate: '80.00',
      marketRate: '110.00',
    },
    {
      _id: '5b21ca3aee7f6fbccd471815',
      projectPin: '561779',
      siteCode: 'QK17C',
      plantCode: 'F2045',
      name: '10 Tonne Dumper',
      internalRate: '104.00',
      marketRate: '120.00',
    },
    {
      _id: '5b21c3eeeb7f6fbccd471815',
      projectPin: '561779',
      siteCode: 'QK17C',
      plantCode: 'T545',
      name: 'Hydraulic Breaker',
      internalRate: '54.50',
      marketRate: '75.00',
    },
    {
      _id: '5b21c3eweb7f6fbccd471815',
      projectPin: '561779',
      siteCode: 'QK17C',
      plantCode: 'T545',
      name: 'Lifting Straps',
      internalRate: '54.50',
      marketRate: '75.00',
    },
  ]

  return plantList
}

module.exports = {
  getPlant,
}
