import { createActions, createReducer } from '../src';
import postApi from './api/postApi';

describe('Test Reducer Creator with Default Option and defaultState', () => {
  const defaultState = { data: { items: [{ id: 1, name: 'Steven' }] } };
  const defaultDataGetter = jest.fn();

  const actions = createActions(postApi);
  const reducer = createReducer(actions, {
    defaultData: defaultState,
    defaultDataGetter
  });

  test('Get All', () => {
    const rs = reducer(
      defaultState,
      (actions.get as any).success({
        name: 'Duy',
        items: [{ id: 1, name: 'Duy' }, { id: 2, name: 'Hoang' }]
      })
    );

    expect(rs.data.items.length).toBe(2);
    expect(rs).toMatchSnapshot();
  });

  test('Get By ID', () => {
    const rs = reducer(
      defaultState,
      (actions.getById as any).success({ id: 3, name: 'Bao' })
    );

    expect(rs.data.items.length).toBe(2);
    expect(rs).toMatchSnapshot();
  });

  test('Clear', () => {
    const rs = reducer(defaultState, (actions as any).clear.success());

    expect(rs.data.items.length).toBe(0);
    expect(rs).toMatchSnapshot();
  });

  test('Remove By Id', () => {
    const rs = reducer(
      defaultState,
      (actions as any).removeItem.success({ id: 1 })
    );

    expect(rs.data.items.length).toBe(0);
    expect(rs).toMatchSnapshot();
  });
});

describe('Test Reducer Creator with Default Option and empty State', () => {
  const defaultState = {};
  const defaultDataGetter = jest.fn();
  const actions = createActions(postApi);
  const reducer = createReducer(actions, {
    defaultData: defaultState,
    defaultDataGetter
  });

  test('Get All', () => {
    const rs = reducer(
      defaultState,
      (actions.get as any).success({
        name: 'Duy',
        items: [{ id: 1, name: 'Duy' }, { id: 2, name: 'Hoang' }]
      })
    );

    expect(rs.data.items.length).toBe(2);
    expect(rs).toMatchSnapshot();
  });

  test('Get By ID', () => {
    const rs = reducer(
      defaultState,
      (actions.getById as any).success({ id: 3, name: 'Bao' })
    );

    expect(rs.data.items.length).toBe(1);
    expect(rs).toMatchSnapshot();
  });

  test('Clear', () => {
    const rs = reducer(defaultState, (actions as any).clear.success());

    expect(rs.data.items.length).toBe(0);
    expect(rs).toMatchSnapshot();
  });

  test('Remove By Id', () => {
    const rs = reducer(
      defaultState,
      (actions as any).removeItem.success({ id: 1 })
    );

    expect(rs.data.items.length).toBe(0);
    expect(rs).toMatchSnapshot();
  });
});
