class UndergroundSystem:

    def __init__(self):
        self.checkedIn={}
        self.stationData={}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkedIn[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        startStation, checkedInTime=self.checkedIn[id]
        travelTime=t-checkedInTime
        stations=(startStation, stationName)

        if stations in self.stationData:   
            self.stationData[stations].append(travelTime)
        else:
            self.stationData[stations] = [travelTime]
        self.checkedIn.pop(id)
       

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        stations=(startStation, endStation)
        sum=0

        for n in self.stationData.get(stations):
            sum+=n
        return sum/len(self.stationData[stations])


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)