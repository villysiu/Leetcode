class UndergroundSystem:

    def __init__(self):
        self.checkedIn={}
        self.stationData={}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkedIn[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        startStation, checkedInTime=self.checkedIn[id]
        travelTime=t-checkedInTime
        key=(startStation, stationName)

        totalTime, totalCount = self.stationData.get(key, (0, 0))
        self.stationData[key] = (totalTime+travelTime, totalCount+1)
        self.checkedIn.pop(id)
       

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        key=(startStation, endStation)
        totalTime, totalCount = self.stationData[key]
        return totalTime/totalCount


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)