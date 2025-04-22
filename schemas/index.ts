// === FIELDS ===
import { metadataFields } from './fields/metadata'
import roleVisibility from './fields/roleVisibility'

// === USERS ===
import auth from './users/auth'
import availability from './users/availability'
import crewGroup from './users/crewGroup'
import customFields from './users/customFields'
import role from './users/role'
import salaryRate from './users/salaryRate'
import user from './users/user'

// === PROJECTS ===
import checklist from './projects/checklist'
import client from './projects/client'
import jobCategory from './projects/jobCategory'
import phase from './projects/phase'
import project from './projects/project'
import projectstatus from './projects/projectstatus'
import tasktype from './projects/tasktype'
import unit from './projects/unit'
import workOrder from './projects/workOrder'

// === FINANCE ===
import costCenter from './finance/costCenter'
import currency from './finance/currency'
import discount from './finance/discount'
import invoice from './finance/invoice'
import payment from './finance/payment'
import quote from './finance/quote'
import taxRule from './finance/taxRule'
import warranty from './finance/warranty'

// === ASSETS ===
import assetCategory from './assets/assetCategory'
import equipmentCondition from './assets/equipmentCondition'
import material from './assets/material'
import materialCategory from './assets/materialCategory'
import supplier from './assets/supplier'
import tool from './assets/tool'
import toolAssignment from './assets/toolAssignment'

// === LOGS ===
import activityType from './logs/activityType'
import inspection from './logs/inspection'
import log from './logs/log'
import logTemplate from './logs/logTemplate'
import photo from './logs/photo'
import video from './logs/video'

// === PAYROLL ===
import allowance from './payroll/allowance'
import overtime from './payroll/overtime'
import payroll from './payroll/payroll'
import payrollConfig from './payroll/payrollConfig'
import timesheet from './payroll/timesheet'

// === NOTIFICATIONS ===
import channel from './notifications/channel'
import notification from './notifications/notification'
import triggerRule from './notifications/triggerRule'

// === SYSTEM ===
import activityLog from './system/activityLog'
import dashboard from './system/dashboard'
import emailTemplate from './system/emailTemplates'
import exportConfig from './system/exportConfig'
import permissions from './system/permissions'
import reportTemplate from './system/reportTemplate'
import settings from './system/settings'
import version from './system/version'

// === UI ===
import layoutPreference from './ui/layoutPreference'
import menuConfig from './ui/menuConfig'
import widgetSettings from './ui/widgetSettings'

// === FILES ===
import uploadedFile from './files/uploadedFile'

// === EXPORT TO SANITY ===
export const schemaTypes = [
  // Fields
  roleVisibility,

  // Users
  auth,
  availability,
  crewGroup,
  customFields,
  role,
  salaryRate,
  user,

  // Projects
  checklist,
  client,
  jobCategory,
  phase,
  project,
  projectstatus,
  tasktype,
  unit,
  workOrder,

  // Finance
  costCenter,
  currency,
  discount,
  invoice,
  payment,
  quote,
  taxRule,
  warranty,

  // Assets
  assetCategory,
  equipmentCondition,
  material,
  materialCategory,
  supplier,
  tool,
  toolAssignment,

  // Logs
  activityType,
  inspection,
  log,
  logTemplate,
  photo,
  video,

  // Payroll
  allowance,
  overtime,
  payroll,
  payrollConfig,
  timesheet,

  // Notifications
  channel,
  notification,
  triggerRule,

  // System
  activityLog,
  dashboard,
  emailTemplate,
  exportConfig,
  permissions,
  reportTemplate,
  settings,
  version,

  // UI
  layoutPreference,
  menuConfig,
  widgetSettings,

  // Files
  uploadedFile
]
