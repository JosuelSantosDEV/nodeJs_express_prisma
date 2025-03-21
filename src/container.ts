import { LeadsController } from "./controllers/newLeadsController" // Usando no novo controller
import { GroupsController } from "./controllers/GroupsController"
import { CampaignsController } from "./controllers/CampaignsController"
import { CampaignLeadsController } from "./controllers/CampaignLeadsController"
import { GroupLeadsController } from "./controllers/GroupLeadsController"
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository"

export const leadsRepository = new PrismaLeadsRepository()

export const leadsController = new LeadsController(leadsRepository)
export const groupsController = new GroupsController()
export const groupLeadsController = new GroupLeadsController()
export const campaignsController = new CampaignsController()
export const campaignLeadsController = new CampaignLeadsController()