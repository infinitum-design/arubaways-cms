// === USERS & ACCESS CONTROL ===
import user from './users/user'
import salaryRate from './users/salaryRate'
import auth from './users/auth'
import role from './users/role'
import customFields from './users/customFields'
import crewGroup from './users/crewGroup'
import availability from './users/availability'

// === PROJECTS ===
import project from './projects/project'
import unit from './projects/unit'
import client from './projects/client'
import jobCategory from './projects/jobCategory'
import phase from './projects/phase'
import projectstatus from './projects/projectstatus'
import tasktype from './projects/tasktype'
import workOrder from './projects/workOrder'
import checklist from './projects/checklist'

// === FINANCE ===
import quote from './finance/quote'
import invoice from './finance/invoice'
import payment from './finance/payment'
import discount from './finance/discount'
import costCenter from './finance/costCenter'
import currency from './finance/currency'
import taxRule from './finance/taxRule'
import warranty from './finance/warranty'

// === ASSETS ===
import tool from './assets/tool'
import toolAssignment from './assets/toolAssignment'
import material from './assets/material'
import equipmentCondition from './assets/equipmentCondition'
import assetCategory from './assets/assetCategory'
import materialCategory from './assets/materialCategory'
import supplier from './assets/supplier'

// === LOGS & OPERATIONS ===
import activityType from './logs/activityType'
import log from './logs/log'
import photo from './logs/photo'
import video from './logs/video'
import inspection from './logs/inspection'
import logTemplate from './logs/logTemplate'

// === PAYROLL ===
import payroll from './payroll/payroll'
import overtime from './payroll/overtime'
import allowance from './payroll/allowance'
import payrollConfig from './payroll/payrollConfig'
import timesheet from './payroll/timesheet'

// === SYSTEM & UI SETTINGS ===
import dashboard from './system/dashboard'
import permissions from './system/permissions'
import settings from './system/settings'
import activityLog from './system/activityLog'
import emailTemplate from './system/emailTemplates'
import exportConfig from './system/exportConfig'
import reportTemplate from './system/reportTemplate'
import version from './system/version'

// === UI PREFERENCES ===
import layoutPreference from './ui/layoutPreference'
import menuConfig from './ui/menuConfig'
import widgetSettings from './ui/widgetSettings'

// === NOTIFICATIONS ===
import notification from './notifications/notification'
import triggerRule from './notifications/triggerRule'

// === FILES ===
import uploadedFile from './files/uploadedFile'

// === EXPORT TO SANITY ===
export const schemaTypes = [
  // Users
  user, salaryRate, auth, role, customFields, crewGroup, availability,

  // Projects
  project, unit, client, jobCategory, phase, projectstatus, tasktype, workOrder, checklist,

  // Finance
  quote, invoice, payment, discount, costCenter, currency, taxRule, warranty,

  // Assets
  tool, toolAssignment, material, equipmentCondition, assetCategory, materialCategory, supplier,

  // Logs & Operations
  activityType, log, photo, video, inspection, logTemplate,

  // Payroll
  payroll, overtime, allowance, payrollConfig, timesheet,

  // System & UI Settings
  dashboard, permissions, settings, activityLog, emailTemplate, exportConfig, reportTemplate, version,
  layoutPreference, menuConfig, widgetSettings,

  // Notifications
  notification, triggerRule,

  // Files
  uploadedFile
]
