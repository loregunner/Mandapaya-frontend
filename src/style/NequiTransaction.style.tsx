"use client"

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 72rem; 
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem; 
  padding: 1rem;
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 1px;
  height: 2rem; 
  background-color: #d1d5db; 
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  color: #374151;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6; 
  }

  svg {
    width: 1rem; 
    height: 1rem; 
    margin-right: 0.5rem; 
  }
`;

export const Logo = styled.img`
  height: 2.5rem; 
`;

export const NequiLogo = styled.img`
  width: 7rem; 
  height: auto;
`;
