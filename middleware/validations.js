const moment = require('moment');


async function userCreate({ first_name, last_name, email, password, profile_img_url, short_description, long_description, linkedin_url, website_url }) {
    if (!first_name || typeof first_name !== 'string') throw new Error('badFirstName');
    if (!last_name || typeof last_name !== 'string') throw new Error('badLastName');
    if (!email || typeof email !== 'string') throw new Error('badEmail');
    if (!password || typeof password !== 'string') throw new Error('badPassword');
    // below are NOT *required*
    if (profile_img_url !== undefined && typeof profile_img_url !== 'string') throw new Error('badProfileImg');
    if (short_description !== undefined && typeof short_description !== 'string') throw new Error('badShortDescription');
    if (long_description !== undefined && typeof long_description !== 'string') throw new Error('badLongDescription');
    if (linkedin_url !== undefined && typeof linkedin_url !== 'string') throw new Error('badLinkedinURL');
    if (website_url !== undefined && typeof website_url !== 'string') throw new Error('badWebsiteURL');
    return true;
};

async function userUpdate(body) {
    const { user_type, first_name, last_name, email, password, profile_img_url, title, short_description, long_description, linkedin_url, website_url, can_create_sessions } = body
    if (can_create_sessions !== undefined && typeof can_create_sessions !== 'boolean') throw new Error('aFieldRequired');
    if (!user_type && !first_name && !last_name && !profile_img_url && !title && !short_description && !long_description && !linkedin_url && !website_url) throw new Error('aFieldRequired');
    return true;
};

async function userOrgAdd({ organization_id, user_type, user_title, can_create_sessions }) {
    if (!organization_id || typeof organization_id !== 'number') throw new Error('anOrgRequiredUserOrg')
    if (!user_type || typeof user_type !== 'string') throw new Error('badUserType');    
    if (!title || typeof title !== 'string') throw new Error('badTitle');
    if (typeof can_create_sessions !== 'boolean') throw new Error('badCanCreateSession');
    return true;
};

async function userOrgUpdate(body) {
    const { user_type, user_title, can_create_sessions } = body
    if (can_create_sessions !== undefined && typeof can_create_sessions !== 'boolean') throw new Error('aFieldRequiredUserOrg');
    if (!user_type && !user_title) throw new Error('aFieldRequiredUserOrg')
    return true;
};

async function userLogin({ email, password }) {
    if (!email) throw new Error('invalidUserEmail');
    if (!password) throw new Error('invalidPassword');
    return true;
};

async function organizationCreate({ user_id, name, short_description, long_description, logo_img_url, website_url, hosts_can_create_sessions }) {
    if (!user_id || typeof user_id !== 'number') throw new Error('badOrgUserId');
    if (!name || typeof name !== 'string') throw new Error('badOrgName');
    if (!short_description || typeof short_description !== 'string') throw new Error('badOrgShortDescription');
    if (!long_description || typeof long_description !== 'string') throw new Error('badOrgLongDescription');
    if (!logo_img_url || typeof logo_img_url !== 'string') throw new Error('badOrgLogoImgUrl');
    if (!website_url || typeof website_url !== 'string') throw new Error('badOrgWebsiteUrl');
    if (typeof hosts_can_create_sessions !== 'boolean') throw new Error('badOrgHostsCanCreateSessions');
    return true;
};

async function orgUpdate(body) {
    const { user_id, name, short_description, long_description, logo_img_url, website_url, hosts_can_create_sessions } = body
    if (hosts_can_create_sessions !== undefined && typeof hosts_can_create_sessions !== 'boolean') throw new Error('aFieldRequiredOrg');
    if (!user_id && !name && !short_description && !long_description && !logo_img_url && !website_url) throw new Error('aFieldRequiredOrg');
    return true;
};

async function sessionCreate({ user_id, organization_id, date, start_time, location, duration, delay }, paramsOrgId) {
    if (!user_id || typeof user_id !== 'number') throw new Error('badSessionUserId');
    if (!organization_id || typeof organization_id !== 'number' || organization_id !== paramsOrgId) throw new Error('badSessionOrganizationId');
    if (!date || typeof date !== 'string' || !moment(date).isValid()) throw new Error('badSessionDate');
    if (!start_time || typeof start_time !== 'string' || !moment(start_time).isValid()) throw new Error('badSessionStartTime');
    if (!location || typeof location !== 'string') throw new Error('badSessionLocation');
    if (!duration || typeof duration !== 'string') throw new Error('badSessionDuration');
    if (!delay || typeof delay !== 'string') throw new Error('badSessionDelay');
    return true;
}

async function sessionUpdate(body) {
    const { user_id, organization_id, date, start_time, location, duration, delay } = body
    if ( !user_id && !organization_id && !date && !start_time && !location && !duration && !delay) throw new Error('aFieldRequiredSession');
    return true;
}


module.exports = { userCreate, userUpdate, userLogin, organizationCreate, orgUpdate, sessionCreate, sessionUpdate };