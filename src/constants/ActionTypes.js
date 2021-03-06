import createConstants from '../utils/createConstants'

export default createConstants(
  // category
  'FETCH_CATEGORIES',
  // tags
  'FETCH_TAGS',
  // comments
  'FETCH_COMMENTS_BY_POST_ID',
  'ADD_COMMENT',
  // post
  'FETCH_POSTS',
  'FETCH_LAST_POSTS',
  'FETCH_POST_BY_ID',
  'ADD_POST_VISIT_COUNT',
  // about
  'FETCH_ABOUT',
)
