SMARTFACE - SMS Managed Accountability & Reporting Technology for Food Aid Commodities in Ethiopia
=========

# The problem
Getting food aid delivery and distribution data from regions has proved to be challenging for a number of reasons. Among them are:
- Lack of reliable infrastructure to implement commodity tracking tools such as CATS at Regional (Woreda and FDP) level
- Limited availability of skilled personnel at FDP level to collect and report information using CMPM reporting formats
- Getting reports through paper formats take longer to be compiled and aggregated at different administrative hierarchies at regions (FDP -> Woreda -> Zone -> Region -> Federal)
- Previous efforts to collect data using tools like Excel prove to be very expensive to rollout and operate requiring huge investment in training and software license costs.

# How does it work?
A combination of SMS and USSD approach is going to be utilized to collect food movement at different levels in the country wide supply chain.
- Regions will get information about resource allocation (commodity type and amount) early in the supply chain process during allocation to help them prepare required space and facilities to receive the food. This information is not only already available in CATS as “Requisition” but the capability to send this information is SMS format is already implemented.
- When commodities leave central hubs/warehouses destined to FDPs, information about quantity and type of commodity which is in transit will be delivered to FDP officials in SMS format giving them ahead of time notification about incoming shipment. 
- As commodities arrive at their destinations, FDP storekeepers are expected to fill out USSD based menu forms specifying key pieces of information such as Goods Issue Ticket from the hub and delivered quantity of commodity. CATS will then be able to identify destination FDP, type of commodity, quantity dispatched and transporter from hub issued Goods Issue Ticket number provided by FDP storekeeper.
- FDP officials are then expected to fill USSD forms for supplying distribution information. Round, month, number of assisted beneficiaries and total amount of commodities distributed will be reported to CATS. 
- At the end of each period (round or month), FDP storekeepers will then be required to submit stock status report of commodities which remain in their store (carry over stock) which constitute CMPM Woreda stock status report.

Looking at the above sets of information, it’s easy to draw a direct link between CATS KPIs and datasets collected through SMS/USSD. They are carefully selected to compliment and improve CATS reporting capabilities by collecting data early on in the process as they happen and not wait for up to 4 weeks (though very conservative estimate) until hard copy reports arrive at the Federal level.

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
